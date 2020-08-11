import http from "@/libs/http";

// 示例请求
export function getList(){
    return http({
            url: `url`,
            method:"get",
    });
}