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
    fromPath: `https://kkmaster.gatsbyjs.io/about`,
    toPath: `https://kkmaster.gatsbyjs.io/aboutvn`,
   
  });
}