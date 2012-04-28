<div id="blogs">
    <table>
<?php
if (is_array($blogs)) {
    foreach ($blogs as $blog) {
?>
        <tr>
            <td id="blogTitle<?php echo $blog['id'];?>" class="title"><?php echo $blog['title']; ?></td>
            <td class="date"><?php echo $blog['date']; if ($user){$blogId = $blog['id']; include 'blogControl.tpl';} ?></td>
        </tr>
        <tr>
            <td id="blogDescr<?php echo $blog['id'];?>" class="description" colspan="2"><?php echo $blog['description']; ?></td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
<?php
    }
?>
    </table>
    <table class="pages">
        <tr>
            <td class="left"><?php if ($page > 1){ ?><span onclick="loadBlog(1, false);">First blog</span> | <span onclick="loadBlog(<?php echo ($page - 1);?>, false);">Previous blog</span><?php } else { ?>&nbsp;<?php } ?></td>
            <td class="center"><?php if ($page > 1) { echo '<span onclick="loadBlog(' . ($page - 1) . ', false);">' . ($page - 1) . "</span> | ";} echo $page; if (($total_pages - $page) > 0){ echo ' | <span onclick="loadBlog(' . ($page + 1) . ', false);">' . ($page + 1) . "</span>"; }?></td>
            <td class="right"><?php if (($total_pages - $page) > 0){ ?><span onclick="loadBlog(<?php echo ($page + 1);?>, false);">Next blog</span> | <span onclick="loadBlog(<?php echo $total_pages;?>, false);">Last blog</span><?php } else { ?>&nbsp;<?php } ?></td>
        </tr>
<?php
} else {
?>
        <tr>
            <td>Er zijn nog geen blogs.</td>
        </tr>
<?php
}
?>
    </table>
    
</div>