<?php

require 'auth.php';
include '../model/blog.php';

$user = $_SESSION['user'];

if ($_POST["mode"] == 'add' && isset($_SESSION['user'])) {
    $mode = $_POST["mode"];
    $title = sqlQuote($_POST['title']);
    $description = sqlQuote($_POST['description']);

    insertBlog(array('title' => $title, 'description' => $description));
} elseif ($_POST["mode"] == 'edit' && isset($_SESSION['user'])) {
    $id = sqlQuote($_POST['id']);
    $title = sqlQuote($_POST['title']);
    $description = sqlQuote($_POST['description']);

    editBlog($id, array('title' => $title, 'description' => $description));

    $total_blogs = totalBlogs();
    $total_pages = ceil($total_blogs / 3);
    if (isset($_POST['page']) && $_POST['page'] > 0) {
        $page = $_POST['page'];
        
        if ($page > $total_pages && $total_pages != 0) {
            $page = $total_pages;
        }
        
        $blogs = getBlogs(($page - 1) * 3);
    } else {
        $page = 1;
        $blogs = getBlogs();
    }

    include '../view/blog/content.tpl';
    exit;
} elseif ($_POST["mode"] == 'delete' && isset($_SESSION['user'])) {
    $id = sqlQuote($_POST['id']);
    deleteBlog($id);

    $total_blogs = totalBlogs();
    $total_pages = ceil($total_blogs / 3);
    if (isset($_POST['page']) && $_POST['page'] > 0) {
        $page = $_POST['page'];
        
        if ($page > $total_pages && $total_pages != 0) {
            $page = $total_pages;
        }
        
        $blogs = getBlogs(($page - 1) * 3);
    } else {
        $page = 1;
        $blogs = getBlogs();
    }

    include '../view/blog/content.tpl';
    exit;
} elseif ($_POST["mode"] == 'another' && isset($_SESSION['user'])) {
    include '../view/blog/footer.tpl';
    exit;
}

$total_blogs = totalBlogs();
$total_pages = ceil($total_blogs / 3);
if (isset($_POST['page']) && $_POST['page'] > 0) {
    $page = $_POST['page'];

    if ($page > $total_pages && $total_pages != 0) {
        $page = $total_pages;
    }

    $blogs = getBlogs(($page - 1) * 3);
} else {
    $page = 1;
    $blogs = getBlogs();
}

include '../view/blog/content.tpl';

if (isset($_SESSION['user']) && $_POST['footer'] != 'false') {
    include '../view/blog/footer.tpl';
}
?>