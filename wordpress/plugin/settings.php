<?php
if (!class_exists('PodW_Setting')) {
  class PodW_Setting
  {
    public static function get_page_content()
    {
?>
      <div class="wrap">
        <h2>Podmind Widget Settings</h2>
        <form method="post" action="options.php">
          <?php
          settings_fields('podw-settings-group');
          do_settings_sections('podw-settings-group');
          submit_button();
          ?>
        </form>
      </div>
<?php
    }

    public static function echo_container_css_field()
    {
      $podw_css = esc_attr(get_option('podw_css'));
      $podw_css = safecss_filter_attr($podw_css);
      echo '<input type="text" name="podw_css" value="' . $podw_css . '" size="80"/>';
    }

    public static function echo_api_key_field()
    {
      $podw_apiKey = esc_attr(get_option('podw_apiKey'));
      echo '<input type="text" name="podw_apiKey" value="' . $podw_apiKey . '" size="80"/>';
    }

    public static function set_option_page()
    {
      add_options_page(
        null,
        'Podmind Widget',
        'manage_options',
        'podmind_widget',
        ['PodW_Setting', 'get_page_content']
      );
    }

    public static function set_settings()
    {
      register_setting('podw-settings-group', 'podw_css', [
        'sanitize_callback' => function ($css) {
          return safecss_filter_attr($css);
        }
      ]);

      register_setting('podw-settings-group', 'podw_apiKey');

      add_settings_section(
        'podw-section',
        null,
        null,
        'podw-settings-group'
      );

      add_settings_field(
        'podw_css',
        'Container CSS:',
        ['PodW_Setting', 'echo_container_css_field'],
        'podw-settings-group',
        'podw-section'
      );

      add_settings_field(
        'podw_apiKey',
        'API Key:',
        ['PodW_Setting', 'echo_api_key_field'],
        'podw-settings-group',
        'podw-section'
      );
    }
  }

  add_action('admin_menu', ['PodW_Setting', 'set_option_page']);

  add_action('admin_init', ['PodW_Setting', 'set_settings']);
}
