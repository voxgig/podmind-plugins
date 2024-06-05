<?php

function option_page()
{
  add_options_page(
    null,
    'Podmind',
    'manage_options',
    null,
    'options'
  );
}

function settings()
{
  register_setting('podmind-settings-group', 'apiKey');

  add_settings_section(
    'podmind-section',
    null,
    null,
    'podmind-settings-group'
  );

  add_settings_field(
    'apiKey',
    'API Key:',
    'api_key_field',
    'podmind-settings-group',
    'podmind-section'
  );
}

function api_key_field()
{
  $apiKey = esc_attr(get_option('apiKey'));
  echo '<input type="text" style="width: 35rem" name="apiKey" value="' . $apiKey . '" />';
}

function options()
{
?>
  <div class="wrap">
    <h2>Podmind Settings</h2>
    <form method="post" action="options.php">
      <?php
      settings_fields('podmind-settings-group');
      do_settings_sections('podmind-settings-group');
      submit_button();
      ?>
    </form>
  </div>
<?php
}

add_action('admin_menu', 'option_page');

add_action('admin_init', 'settings');
