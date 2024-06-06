<?php

function podw_option_page()
{
  add_options_page(
    null,
    'Podmind Widget',
    'manage_options',
    null,
    'podw_options'
  );
}

function podw_settings()
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
    'podw_api_key_field',
    'podw-settings-group',
    'podw-section'
  );
}

function podw_api_key_field()
{
  $podw_apiKey = esc_attr(get_option('podw_apiKey'));
  echo '<input type="text" style="width: 35rem" name="podw_apiKey" value="' . $podw_apiKey . '" />';
}

function podw_options()
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

add_action('admin_menu', 'podw_option_page');

add_action('admin_init', 'podw_settings');
