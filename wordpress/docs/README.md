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
  <img width="800" alt="Screenshot 2024-07-03 at 3 36 17 PM" src="https://github.com/lmscunha/podmind-plugins/assets/65237061/c43fa897-2f0f-4b46-8865-3bd7af8110fa">

- Click on **Upload Plugin**, then **Choose File**;
- Upload the generated zip file (e.g. podmind_widget.zip), then click on **Install Now**;
<img width="800" alt="Screenshot 2024-07-03 at 3 37 36 PM" src="https://github.com/lmscunha/podmind-plugins/assets/65237061/3199969f-2a62-4912-b648-7defeefdb6bb">


- Once the plugin is successfully installed, click on **Activate Plugin**;
<img width="800" alt="Screenshot 2024-07-03 at 3 38 12 PM" src="https://github.com/lmscunha/podmind-plugins/assets/65237061/77b977b4-80ec-438a-8550-961f0284bc9c">

- Go to Pages and add the following shortcode to a page of your choosing:

```php
[podmindwidget]
```
<img width="800" alt="Screenshot 2024-07-03 at 3 39 57 PM" src="https://github.com/lmscunha/podmind-plugins/assets/65237061/d4573e05-e956-4920-9826-2ba2a3e29a76">


- Once you save the changes, you should be able to see the widget and set its [settings](#settings):

<img width="800" alt="Screenshot 2024-06-12 at 12 55 29 PM" src="https://github.com/lmscunha/podmind-plugins/assets/65237061/cdd9fd35-b1ca-4663-af79-a8f1400eb2fe">


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

<img width="800" alt="Screenshot 2024-07-03 at 3 41 43 PM" src="https://github.com/lmscunha/podmind-plugins/assets/65237061/935ece35-276b-42e0-a207-220990744c96">

