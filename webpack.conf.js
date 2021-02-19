const {join} = require("path");

module.exports = {
	mode: "production",
	resolve: {
		extensions: [".ts", ".js"]
	},
	entry: {
		example: "./src/entry.ts"
	},
	output: {
		path: join(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)$/u,
				use: {
					loader: "ts-loader",
					options: {
						transpileOnly: true
					}
				}
			}
		]
	}
};
