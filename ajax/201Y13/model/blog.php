<?php

function getBlogs($start = 0) {
    $query = "SELECT * FROM blog ORDER BY date DESC LIMIT $start, 3";
    $result = mysql_query($query);
    if (mysql_num_rows($result) > 0) {
        while ($row = mysql_fetch_array($result)) {
            $blogs[] = $row;
        }
    }

    return $blogs;
}

function insertBlog($data) {
    $query = "INSERT INTO blog SET title='" . $data['title'] . "', description='" . $data['description'] . "', date='" . date('Y-m-d H:i:s') . "'";
    mysql_query($query);
}

function editBlog($id, $data) {
    $query = "UPDATE blog SET title='" . $data['title'] . "', description='" . $data['description'] . "' WHERE id='$id'";
    mysql_query($query);
}

function deleteBlog($id) {
    $query = "DELETE FROM blog WHERE id='$id'";
    mysql_query($query);
}

function blogsPerPage() {
    $query = "SELECT * FROM config WHERE name='blogs_per_page'";
    $result = mysql_query($query);
    if (mysql_num_rows($result) > 0) {
        while ($row = mysql_fetch_array($result)) {
            $blogs_per_page = $row['value'];
        }
    }

    return $blogs_per_page;
}

function totalBlogs() {
    $query = "SELECT COUNT(*) as total_blogs FROM blog";
    $result = mysql_query($query);
    if (mysql_num_rows($result) > 0) {
        while ($row = mysql_fetch_array($result)) {
            $total_blogs = $row['total_blogs'];
        }
    }

    return $total_blogs;
}

?>