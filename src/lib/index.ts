import database from './database';
import { Categories, Configurations, Departments, Products } from './models';

await database.connect()
export const getItem = async (slug: string) => {
	let item = await Products.aggregate(createPipeline('products', 1, { __v: 0, updatedAt: 0, 'cat.__v': 0, 'cat.updatedAt': 0 }, { _id: 1 }, { slug, isActive: true, asDraft: false })).exec();
	return item[0].results[0]
}
export const getConfig = async (projection: any): Promise<any> =>
	await Configurations.findOne({}, projection);

const createPipeline = (coll: string, limit: number, projection: any = {}, sort: any = { id: -1 }, match: any = { isActive: true, asDraft: false }) => [
	{ $match: match },
	{
		$lookup: {
			from: 'categories',
			localField: 'category',
			foreignField: '_id',
			as: 'cat'
		}
	},
	{
		$unwind: {
			path: '$cat',
			preserveNullAndEmptyArrays: true
		}
	},
	{
		$facet: {
			results: [
				{ $limit: limit },
				{ $sort: sort },
				{
					//$project: { ...projection, 'cat.category': 1 }
					$project: projection
				}
			]
		}
	}
];
const get1stImageFromProducts = (list: [any]) => {
	let n = [];
	for (let item of list) {
		n.push({
			...item, images: item.images[0], cat: item?.cat?.category, dep: item?.cat?.department
		})
	}
	return n
}
export const getHomeContent = async () => {
	let config = await getConfig({
		new_arrivals_products_limit: 1,
		cat_types_limit: 1,
		popular_products_limit: 1,
		categories_limit: 1,
		recommended_for_user_limit: 1
	})
	const getCategories = await Categories.find({}, { category: 1, image: 1, department: 1, _id: 0, slug: 1, }).sort('-_id').limit(config.cat_types_limit.limit).lean()
	const prList = await Products.aggregate(createPipeline('products', config.new_arrivals_products_limit.limit, {
		is_new: 1,
		title: 1,
		images: 1,
		rating: 1,
		views: 1,
		_id: 0,
		slug: 1,
		price: 1,
		discount: 1,
		'cat.category': 1,
		'cat.department': 1
	})).exec();
	const catTypes = await Departments.find({}, { title: 1, image: 1, _id: 0, slug: 1 }).sort('-_id').limit(config.cat_types_limit.limit)
	const getPopularItems = get1stImageFromProducts(await Products.find({}, { _id: 0, title: 1, images: 1, price: 1, discount: 1, slug: 1 }).sort({ views: -1 }).limit(config.popular_products_limit).lean())
	const productList = get1stImageFromProducts(prList[0].results)
	return {
		productList,
		catTypes,
		getPopularItems,
		getCategories: getCategories
	}
}
