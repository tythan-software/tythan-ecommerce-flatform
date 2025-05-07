## Structure

```
src/
├── business-layer/         # Implementation of business logic.
│   ├── security/           # Contains apparatus for creating tokens and processing security
│   │                       # checks on specific API request.
│   ├── validators/         # Contains validating data sent with API request.
│
├── data-layer/             # Organizes how the data will be stored and accessed.
│   ├── adapters/           # Implements the set up of Mongoose for connecting to a database.
│   ├── data-abstracts/     # Schemas structure of each Mongo Collection.
│   ├── data-agents/        # Implements the query transactions.
│   ├── models/             # Contains a Typescript class.
│
├── middleware/             # Contains resources to establish the server configuration
│   │                       # as a place to store utility processes shared.
│   ├── common/             # Contains the instantiation of the ‘logger’ that can be shared
│   │                       # across the application.
│   ├── server-config/      # Contains vendor specific implementation of the node server
│   │                       # framework vendor, ‘Express’ as well as the all important 
│   │                       # ‘routes’ configuration organizing 
│   │                       # the REST API endpoints.
│   ├── routes.ts           #
│
├── service-layer/          # 
│   ├── controller/         # 
│   ├── request/            # 
│   ├── responses/          # 
│
├── swagger-ui/             # 
│   ├── routes.ts
│   ├── swagger.json
│
├── server.ts               # 
├── types.ts/               # Used to declare libraries that does not exist for 
│                           # a desired JavaScript package.
├── tsoa.json               #
├── webpack.config.js       #
```