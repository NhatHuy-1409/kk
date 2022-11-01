exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `/`,
    toPath: `/vi`,
    conditions: { 
        country: `vn` 
      } 
  });
	createRedirect({
    fromPath: `/`,
    toPath: `/en`,
    conditions: { 
        country: `us` 
      } 
  });
}