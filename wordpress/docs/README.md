# Wordpress Podmind Widget

- The plugin is in the development stage.
- To install it, generate and upload the source code zip file.

## Install Zip

- Generate a zip file from source files. For example:
```bash
cd podmind-plugins/wordpress/plugin
zip podmind_widget.zip *
```
- Go to your WordPress dashboard, click on **Plugings**, then **Add New Plugin**:
- Click on **Upload Plugin**, then **Choose File**;
- Upload the generated zip file (e.g. podmind_widget.zip), then click on **Install Now**;
- Once the plugin is successfully installed, click on **Activate Plugin**:


## Settings

- To access the plugin settings page, please go to `Settings` -> `Podming Widget`;
- **API KEY** - The API key provided by Voxgig.
- **Container CSS** - Adds style to the widget container (e.g. color: blue). 
Please click here to see the [allowed attributes](https://github.com/WordPress/wordpress-develop/blob/9d11cee11e7d2d01101fbe0fd6d8f03634021c8c/src/wp-includes/kses.php#L2331).
- **Debug Mode** - Loggs the widget properties. For example:
```bash
apikey: "your-api-key"
debug: true
mark: "20e1a7d5"
```
