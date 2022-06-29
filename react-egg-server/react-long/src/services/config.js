const isProduction = process.env.NODE_ENV === "production";
const baseURL = isProduction ? "/" : "/base-adapter/login";

// 首页
export const HomeConfig = {
  Test: `${baseURL}`,
};

/**
 *  使用示例
 * 
 const test = async (params) => {
    const { code, data } = await services({
        url: HomeConfig.Test,
        method: "post",
        data: { ...params }
    });
    if (code === "200" && data) {
        console.log(data)
    }
};
 * 
 * 
 */
