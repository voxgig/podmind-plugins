<?php

/*
 * Plugin Name:       Podmind Widget
 * Version:           0.0.1
 * Description:       Embed Podmind widget.
 * Requires PHP:      7.2
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Author:            Leonardo Cunha
 * Text Domain:       podmind-widget-plugin
 */

if (!defined('ABSPATH')) {
  exit; // Exit if accessed directly
}

require 'settings.php';

if (!class_exists('PodW_Plugin')) {
  class PodW_Plugin
  {
    public static function echo_script_header()
    {
      echo '<script async src="https://podmind.voxgig.com/widget/voxgig-podmind-ask.js"></script>';
    }

    public static function shortcode_widget_element()
    {
      $podw_css = esc_attr(get_option('podw_css'));
      $podw_apiKey = esc_attr(get_option('podw_apiKey'));
      $podw_debug = esc_attr(get_option('podw_debug'));

      return '<div style="' . $podw_css . '"><voxgig-podmind-ask apikey="' .
        $podw_apiKey . '" debug="' . $podw_debug .
        '"></voxgig-podmind-ask></div>';
    }

    public static function register_shortcodes()
    {
      add_shortcode('podmindwidget', ['PodW_Plugin', 'shortcode_widget_element']);
    }
  }

  add_action('wp_head', ['PodW_Plugin', 'echo_script_header']);

  add_action('init', ['PodW_Plugin', 'register_shortcodes']);
}
