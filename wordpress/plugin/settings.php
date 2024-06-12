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

    public static function echo_api_key_field()
    {
      $podw_apiKey = esc_attr(get_option('podw_apiKey'));
      echo '<input type="text" style="width: 35rem" name="podw_apiKey" value="' . $podw_apiKey . '" />';
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
      register_setting('podw-settings-group', 'podw_apiKey');

      add_settings_section(
        'podw-section',
        null,
        null,
        'podw-settings-group'
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
