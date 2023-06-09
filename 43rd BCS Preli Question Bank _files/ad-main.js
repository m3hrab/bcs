;
(function ($) {
    // get all hrf value from a document and change tha value


    function addQueryForAllExternalLink() {
        var ref = window.location.href;

        var blogId = ad_blog_info.ID;
        var blogCatId = ad_blog_info.category_ID;

        var params = [];
        var hrf = document.querySelectorAll('a[href]');

        for (var i = 0; i < hrf.length; i++) {

            if (hrf[i].href.indexOf('blog.10minuteschool.com') > -1) {
                continue;
            }

            params.push({
                key: 'ref',
                value: ref
            });

            if (blogId) {
                params.push({
                    key: 'post_id',
                    value: blogId
                });
            }

            if (blogCatId) {
                params.push({
                    key: 'blog_category_id',
                    value: blogCatId
                });
            }

            addQueryParams(hrf[i], params);

        }

    }

    function addQueryFroBanner() {
        var adWrap = document.querySelectorAll('.ten-ms-ad-wrap');
        var ref = window.location.href;

        var blogId = ad_blog_info.ID;
        var blogCatId = ad_blog_info.category_ID;

        adWrap.forEach(function (adWrap) {
            var params = [];
            var hrf = adWrap.querySelectorAll('a[href]');

            let adId = adWrap.getAttribute('data-ad-id');
            let adType = adWrap.getAttribute('data-ad-type');


            for (var i = 0; i < hrf.length; i++) {

                if (hrf[i].href.indexOf('blog.10minuteschool.com') > -1) {
                    continue;
                }

                params.push({
                    key: 'ref',
                    value: ref
                });

                if (blogId) {
                    params.push({
                        key: 'post_id',
                        value: blogId
                    });
                }

                if (blogCatId) {
                    params.push({
                        key: 'blog_category_id',
                        value: blogCatId
                    });
                }

                if (adId) {
                    params.push({
                        key: 'ad_id',
                        value: adId
                    });
                }

                if (adType) {
                    params.push({
                        key: 'ad_type',
                        value: adType
                    });
                }

                addQueryParams(hrf[i], params);

            }

        });
    }


    function addQueryParams(url, params) {
        var queryParams = new URLSearchParams(url);
        // add or replace key and value and redirect to that url
        params.forEach(function (param) {
            queryParams.set(param.key, param.value);
        });

        url.href = url.href + '?' + queryParams.toString();
    }


    addQueryForAllExternalLink();
    addQueryFroBanner();

}(jQuery));
