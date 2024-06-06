<?php

/*
 * Plugin Name:       Podmind Widget
 * Version:           0.0.1
 * Description:       Embed Podmind widget.
 * Requires PHP:      7.2
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       podmind-widget-plugin
 */

if (!defined('ABSPATH')) {
  exit; // Exit if accessed directly
}

require 'settings.php';

function podw_render_embedded_html_header()
{
  echo '<script async src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js"></script>';
}

function podw_render_embedded_html_body()
{
  $podw_apiKey = esc_attr(get_option('podw_apiKey'));
  return '<voxgig-podmind-ask apikey="' . $podw_apiKey . '" debug="true"></voxgig-podmind-ask>';
}

add_action('wp_head', 'podw_render_embedded_html_header');

add_action('the_content', 'podw_render_embedded_html_body');
