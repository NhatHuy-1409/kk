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
    fromPath: `/en`,
    toPath: `https://shopeefood.vn/da-nang/nuoc-ep-detox-151-nuoc-ep-detox-nguyen-hoang.g3frat?shareChannel=zalo_message&smtt=0.0.12`,
    conditions: { 
        language: `en` 
      } 
  });
}