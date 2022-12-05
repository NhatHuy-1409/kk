exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `/en`,
    toPath: `https://www.google.com.vn/`,
    conditions: { 
        // country: `vn` 
        language:`vn`
      } 
  });
	createRedirect({
    fromPath: `/about`,
    toPath: `https://kkmaster.gatsbyjs.io/aboutvn`,
  });
	createRedirect({
    fromPath: `/kaka`,
    toPath: `https://www.google.com.vn/`,
  });
}