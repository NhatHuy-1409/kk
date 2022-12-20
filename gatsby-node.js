exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `https://kkmaster.gatsbyjs.io/about/`,
    toPath: `https://kkmaster.gatsbyjs.io/aboutvn/`,
    // toPath: `https://shopeefood.vn/da-nang/nuoc-ep-detox-151-nuoc-ep-detox-nguyen-hoang.g3frat?shareChannel=zalo_message&smtt=0.0.12`,
    conditions: { 
        language: `en` 
    } 

  });
	createRedirect({
    fromPath: `/about/`,
    toPath: `/aboutvn/`,
  });
	// createRedirect({
  //   fromPath: `/kaka`,
  //   toPath: `https://www.google.com.vn/`,
  // });
}