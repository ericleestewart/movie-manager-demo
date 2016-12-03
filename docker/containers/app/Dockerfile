# Php-fpm 5.6 Container
FROM php:5.6-fpm

RUN apt-get update && apt-get install -y \
# For bz2
    libbz2-dev \
# For gd
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng12-dev \
    libxpm-dev \
    libvpx-dev \
# For ftp
    libssl-dev \
# For mcrypt
    libmcrypt-dev \
# For soap
    libxml2-dev \
# Clean up
    && apt-get clean && rm -rf /var/lib/apt/lists/* \
# Configure settings for gd
    && docker-php-ext-configure gd \
        --with-freetype-dir=/usr/lib/x86_64-linux-gnu/ \
        --with-jpeg-dir=/usr/lib/x86_64-linux-gnu/ \
        --with-xpm-dir=/usr/lib/x86_64-linux-gnu/ \
        --with-vpx-dir=/usr/lib/x86_64-linux-gnu/ \
    && docker-php-ext-install -j$(nproc) \
        bcmath \
        bz2 \
        exif \
        ftp \
        gd \
        gettext \
        mbstring \
        mcrypt \
        mysqli \
        opcache \
        pdo_mysql \
        shmop \
        soap \
        sockets \
        sysvmsg \
        sysvsem \
        sysvshm \
        zip

COPY ./configs/php-fpm.d/www.conf /usr/local/etc/php-fpm.d/www.conf
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

RUN chmod +x /usr/local/bin/docker-entrypoint.sh