"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesRoutes = void 0;
const common_routes_config_1 = require("../common.routes.config");
class CountriesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'CountriesRoutes');
    }
    configureRoutes() {
        this.app.route(`/countries`)
            .get((req, res) => {
            res.status(200).send(`List of users`);
        });
        this.app.route(`/countries/:region`)
            .get((req, res) => {
            res.status(200).send(`List of users ${req.params.region}`);
        });
        return this.app;
    }
}
exports.CountriesRoutes = CountriesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyaWVzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9Sb3V0ZXMvQ291bnRyaWVzL2NvdW50cmllcy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtFQUEyRDtBQUczRCxNQUFhLGVBQWdCLFNBQVEseUNBQWtCO0lBQ25ELFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7YUFDL0IsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQztRQUVQLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBRUo7QUFwQkQsMENBb0JDIn0=