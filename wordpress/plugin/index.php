<?php

/*
 * Plugin Name: Podmind
 * Version: 0.0.1
 */

require 'settings.php';

function render_embedded_html_header()
{
  echo '<script async src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js"></script>';
}

function render_embedded_html_body()
{
  $apiKey = esc_attr(get_option('apiKey'));
  return '<voxgig-podmind-ask apikey="' . $apiKey . '" debug="true"></voxgig-podmind-ask>';
}

add_action('wp_head', 'render_embedded_html_header');

add_action('the_content', 'render_embedded_html_body');
