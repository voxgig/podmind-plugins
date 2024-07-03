# Wordpress Podmind Widget

- The plugin is in the development stage.
- To install it, generate and upload the source code zip file.

## Install Zip

- Generate a zip file from the source files:

```bash
cd podmind-plugins/wordpress/plugin
zip podmind_widget.zip *
```
- Go to your WordPress dashboard, click on **Plugings**, then **Add New Plugin**:
- Click on **Upload Plugin**, then **Choose File**;
- Upload the generated zip file (e.g. podmind_widget.zip), then click on **Install Now**;
- Once the plugin is successfully installed, click on **Activate Plugin**;
- Go to Pages and add the following shortcode to a page of your choosing:

```php
[podmindwidget]
```
- Once you save the changes, you should be able to see the widget and set its [settings](#settings):

<img width="1726" alt="Screenshot 2024-06-12 at 12 55 29 PM" src="https://github.com/lmscunha/podmind-plugins/assets/65237061/cdd9fd35-b1ca-4663-af79-a8f1400eb2fe">


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
