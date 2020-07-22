ARG APP_PATH="samples/razor/web/razor-vue"
ARG PROJECT_NAME="RazorVue"

#FROM node:10-alpine as build-node
FROM node:lts-alpine as node-build

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY $APP_PATH ./src

WORKDIR /src

RUN npm install -g @vue/cli

# install project dependencies
#RUN npm install -g http-server
#RUN npm install -g @vue/cli
#RUN npm install -g @vue/cli-service
#RUN npm install -g @vue/cli-service-global

RUN npm install
RUN npm run build

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS dotnet-build-env
COPY --from=node-build /src/ ./app
WORKDIR /app

RUN dotnet build "RazorVue.csproj"

# ENV BuildingDocker true
# ENV ASPNETCORE_ENVIRONMENT=Development
# Copy everything else and build
RUN dotnet publish "RazorVue.csproj" -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=dotnet-build-env /app/out .
COPY --from=node-build /src/wwwroot ./wwwroot

EXPOSE 80
ENTRYPOINT ["dotnet", "RazorVue.dll"]
