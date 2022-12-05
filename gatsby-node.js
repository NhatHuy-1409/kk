exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `/`,
    toPath: `/vi`,
    conditions: { 
        // country: `vn` 
        language:`vn`
      } 
  });
	createRedirect({
    fromPath: `/about`,
    toPath: `https://kkmaster.gatsbyjs.io/aboutvn`,
    statusCode: 200,
  });
}