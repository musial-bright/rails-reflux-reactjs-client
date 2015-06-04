# React with Rails steps

npm install -g grunt
npm install -g yo
npm install -g generator-react-webpack

mkdir <Rails-App>/client
cd client
npm install
yo react-webpack

create <Rails-App>/app/assets/javascript/client-bundle.js

Add this to <Rails-App>/config/environments/development.rb:
    config.action_controller.asset_host = Proc.new do |source|
      if source =~ /client-bundle/
        "http://localhost:8000/"
      end
    end
    config.assets.digest = false


Run:
    rails s
    grunt webpack-dev-server
