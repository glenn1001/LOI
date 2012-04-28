<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <table border="1">
                    <xsl:for-each select="metallica/member">
                        <xsl:sort select="name/lastname" />
                        <tr>
                            <td><a href="{@link}"><xsl:value-of select="name/lastname" /></a></td>
                            <td><a href="{@link}"><xsl:value-of select="name/firstname" /></a></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>