APP_NAME=$1
BUILD_NUMBER=$2
#declare -A map=(["app-napiserver"]="app-napiserver")

#APP_NAME=${map[$app]}
if [[ "$APP_NAME" == "" ]]; then
    echo "项目不存在"
    exit 1
fi

echo "要打包的项目：${APP_NAME}"
docker build -t $APP_NAME:$BUILD_NUMBER .
