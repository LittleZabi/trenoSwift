import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const AdminSchema = new mongoose.Schema({
	username: { type: String, length: 100, require: true },
	email: { type: String, length: 120, require: true },
	password: { type: String, require: true },
	avatar: { type: String, require: false },
	lastLogin: { type: String, require: false },
	active: { type: Boolean, default: true }
});
const categoryTypesSchema = new mongoose.Schema(
	{
		title: {type: String, required: true, default: 'general', unique: true},
		categories: {type: Number, default: 0},
		description: {type: String, required: false }
	},
	{
		timestamps: true
	}
)
const ConfigurationSchema = new mongoose.Schema(
	{
		website_name: { type: String, default: '_____' },
		time_after_announcment_visible: { type: Number, default: 10000 },
		new_arrivals_products_limit: {type: Object, default: {limit: 5, note: "This is most recent uploads product which are showing in some places like home page etc."}},
		cat_types_limit: {type: Object, default: {limit: 6, note: "This is category types which is showing in home and other places."}},
		popular_products_limit: {type: Object, default: {limit: 15, note: "This is popular products which is most selling products internationally."}},
		categories_limit: {type: Object, default: {limit: 15, note: "This is categories list limit."}},
		recommended_for_user_limit: {type: Object, default: {limit: 15, note: "This is recommended products limit for clients."}}
		// items_per_page: { type: {limit: Number, note:String}, default: 25 },
		// deviceViewHeaderTextLength: { type: Number, default: 5 },
		// firmsAndFolderPerPage: { type: Number, default: 20 },
		// showAnnouncement: { type: Boolean, default: true },
		// latestBlogsLimit: { type: Number, default: 10 },
		// maximumFilesAllowInImageTools: { type: Number, default: 30 },
		// minimumFilesAllowInImageTools: { type: Number, default: 3 },
		// worldActivitiesPostLimit: { type: Number, default: 15 },
		// paginateButtonShow: { type: Number, default: 6 },
		// blogsPagePostLimit: { type: Number, default: 20 },
		// sideBarRandomPostsLength: { type: Number, default: 15 },
		// mainNewArrivalsLimit: { type: Number, default: 10 },
		// mainCatPerCollLimit: { type: Number, default: 10 },
		// sideviewItemsPerColLimit: { type: Number, default: 4 },
		// searchResultLimit: { type: Number, default: 5 },
		// fullSearchResultLimits: { type: Number, default: 15 },
		// fullSearchResultLimitsText: { type: Number, default: 25 },
		// firmsRelatedCategoryLimit: { type: Number, default: 10 },
		// modalRemovingTime: { type: Number, default: 300 },
		// perPostCommentAllow: { type: Number, default: 5 },
		// commentsLimit: { type: Number, default: 15 },
		// cookiesOptions: {
		// 	type: Object,
		// 	default: { path: '/', httpOnly: true, secure: true, maxAge: 15552000 }
		// },
		// active: { type: Boolean, default: true },
		// UserProfilePictureWidth: {type: Number, default: 320, required: true},
	},
	{
		timestamps: true
	}
);
const AnalyticsSchema = new mongoose.Schema({
	image_processed: { type: Number, default: 0 },
	processed_data: { type: Number, default: 0 },
	watches: { type: Number, defult: 0 },
	phones: { type: Number, defult: 0 },
	computers: { type: Number, defult: 0 },
	phones_category: { type: Number, defult: 0 },
	computers_category: { type: Number, defult: 0 },
	firmwares: { type: Number, defult: 0 },
	cat_firmwares: { type: Number, defult: 0 }
});
const AnnouncmentsSchema = new mongoose.Schema(
	{
		type: { type: String, require: true },
		title: { type: String, require: true },
		body: { type: String, require: true },
		image: { type: String, required: false },
		active: { type: Number, default: true }
	},
	{ timestamps: true }
);
const firmCatSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: false },
		folder_id: { type: Number, required: true, unique: false },
		parent_id: { type: Number, required: false, default: 0 },
		desc: { type: String, required: false, default: false },
		items: { type: Number, required: false, default: 0 },
		active: { type: Number, required: false, default: true },
		new: { type: Number, required: false, default: 1 },
		category: { type: String, required: false },
		slug: { type: String, required: true }
	},
	{
		timestamps: true
	}
);
const firmwaresSchema = new mongoose.Schema(
	{
		folder_id: { type: Number, required: true, unique: false },
		title: { type: String, required: true, unique: true },
		description: { type: String, required: false, default: false },
		size: { type: Number, required: false, default: 1024.0 },
		price: { type: Number, required: false, default: 0.0 },
		url: { type: String, required: true },
		downloads: { type: Number, required: false, default: 87 },
		extension: { type: String, required: false, default: 0 },
		is_active: { type: Boolean, required: false, default: true },
		is_new: { type: Boolean, required: false, default: true },
		is_featured: { type: Boolean, required: false, default: false },
		tags: { type: String, required: false },
		category: { type: String, required: true },
		fans: { type: Number, default: 1 },
		hits: { type: Number, default: 1 },
		popularity: { type: Number, default: 5.0 },
		slug: { type: String, requried: true, unique: true }
	},
	{
		timestamps: true,
		strict: false
	}
);
const usersSchema = new mongoose.Schema(
	{
		firstname: { type: String, required: true, unique: false },
		lastname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		avatar: { type: String, required: false },
		country: { type: String, default: false },
		notifyme: { type: Boolean, required: false },
		active: { type: Boolean, required: true, default: false },
		code: { type: String, required: true }
	},
	{
		timestamps: true,
		strict: false
	}
);
const visitorsSchema = new mongoose.Schema(
	{
		ip: { type: String, required: true },
		visits: { type: Number, required: true }
	},
	{
		timestamps: true,
		strict: false
	}
);
const reviewsSchema = new mongoose.Schema(
	{
		username: { type: String, required: true },
		user_id: { type: String, required: true },
		review: { type: String, required: true },
		country: { type: String, required: false },
		post_id: { type: String, required: true }
	},
	{
		timestamps: true,
		strict: false
	}
);
const productsSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		image: { type: Object, required: false },
		price: {type: Number, required: true},
		quantity: {type: Number, required: false, default: 0},
		category: {type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: false},
		headers: { type: Array, required: false },
		specs_list: {type: Object, required: false},
		views: { type: Number, default: 0 },
		loves: { type: Number, default: 0 },
		rating: {type: Number, default: 5.0},
		slug: { type: Object, required: false },
	},
	{
		timestamps: true,
		strict: false
	}
);

const smartSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		keywords: { type: String, required: true },
		description: { type: String, required: true },
		views: { type: Number, default: 0 },
		loves: { type: Number, default: 0 },
		rating: {type: Number, default: 5.0},
		slug: { type: String, required: true, unique: true },
		category: { type: mongoose.Types.ObjectId, required: true },
		is_new: { type: Boolean, required: true },
		isActive: { type: Boolean, default: true },
		headers: { type: Array, required: true },
		images: { type: Array, required: true },
	},
	{
		timestamps: true,
		strict: false
	}
);

const categoriesSchema = new mongoose.Schema(
	{
		category: { type: String, required: true},
		type: { type: mongoose.Types.ObjectId, ref: 'category_types', required: true },
		items: { type: Number, default: 0 },
		image: { type: String, required: true, default: '/images/logos/category.svg' },
		description: {type: String, required: false}
	},
	{
		timestamps: true,
		strict: false,
		strictQuery: true
	}
);
const blogsSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		subtitle: { type: String, required: true },
		body: { type: String, required: true },
		image: { type: String, require: true },
		author: { type: String, required: true },
		author_id: { type: String, required: true },
		hits: { type: Number, default: 1 },
		fans: { type: Number, default: 1 },
		is_new: { type: Boolean, default: true },
		readTime: { type: Number, default: 10, required: false },
		keywords: { type: String, required: true },
		tags: { type: String, required: true },
		category: { type: String, required: true, default: 'others' },
		slug: { type: String, required: true, unique: true },
		active: { type: Boolean, default: true }
	},
	{
		timestamps: true,
		strict: false,
		strictQuery: true
	}
);
export const blogsModel: any = mongoose.models.blogs || mongoose.model('blogs', blogsSchema);
export const Categories: any =
	mongoose.models.categories || mongoose.model('categories', categoriesSchema);
export const Products: any =
	mongoose.models.products || mongoose.model('products', productsSchema);
export const smartModel: any =
	mongoose.models.mobile_devices || mongoose.model('phones', smartSchema);
export const reviewsModel: any =
	mongoose.models.reviews || mongoose.model('reviews', reviewsSchema);
export const visitorsModel: any =
	mongoose.models.visitors || mongoose.model('visitors', visitorsSchema);
export const Users: any = mongoose.models.users || mongoose.model('users', usersSchema);
export const Firmwares: any =
	mongoose.models.firmwares || mongoose.model('firmwares', firmwaresSchema);
export const firmwareCategories: any =
	mongoose.models.firmwares_categories || mongoose.model('firmwares_categories', firmCatSchema);
export const Announcments: any =
	mongoose.models.announcments || mongoose.model('announcments', AnnouncmentsSchema);
export const Analytics: any =
	mongoose.models.analytics || mongoose.model('analytics', AnalyticsSchema);
export const Configurations: any = mongoose.models.configurations || mongoose.model('configurations', ConfigurationSchema);
export const Admin: any = mongoose.models.admins || mongoose.model('admins', AdminSchema);
export const CategoryTypes: any = mongoose.models.category_types || mongoose.model('category_types', categoryTypesSchema);
