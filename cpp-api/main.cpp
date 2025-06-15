#include "crow.h"

int main()
{
    crow::SimpleApp app;

    // GET /ping -> "pong"
    CROW_ROUTE(app, "/ping")([]()
                             { return "pong"; });

    // POST /hello -> JSON response
    CROW_ROUTE(app, "/hello").methods("POST"_method)([](const crow::request &req)
                                                     {
        auto body = crow::json::load(req.body);
        if (!body) return crow::response(400);

        std::string name = body["name"].s();
        crow::json::wvalue res;
        res["message"] = "Hello, " + name;
        return crow::response{res}; });

    app.port(8080).multithreaded().run();
}
