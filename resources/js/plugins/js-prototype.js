/**
 * Define the chunk method in the prototype of an array
 * that returns an array with arrays of the given size.
 *
 * @param chunkSize {Integer} Size of every group
 */
Object.defineProperty(Array.prototype, 'chunk', {
    value: function (chunkSize) {
        var that = this;/*
        var results = [];
        while (that.length) {
            results.push(that.splice(0, chunkSize));
        }

        return results;*/
        return Array(Math.ceil(that.length / chunkSize)).fill().map(function (_, i) {
            return that.slice(i * chunkSize, i * chunkSize + chunkSize);
        });
    }
});
/**
 * Define the divide method in the prototype of an array
 * that returns an array with arrays of two colums.
 *
 */
Object.defineProperty(Array.prototype, 'divide', {
    value: function () {
        var that = this;
        var total = [];
        var len = that.length;
        if (len > 1) {
            var table_one = that.slice(0, len / 2 + 0.5);
            total[0] = table_one;
            var table_two = that.slice(len / 2 + 0.5, len);
            total[1] = table_two;
        } else {
            var table_one = that.slice(0, len / 2 + 0.5);
            total[0] = table_one;
        }
        return total;
    }
});
Object.defineProperty(Array.prototype, 'divides', {
    value: function (columns = 2, balanced = true) {
        var that = this;
        if (columns < 2)
            return [that];

        var len = that.length,
            out = [],
            i = 0,
            size;
        if (len % columns === 0) {
            size = Math.floor(len / columns);
            while (i < len) {
                out.push(that.slice(i, i += size));
            }
        } else if (balanced) {
            while (i < len) {
                size = Math.ceil((len - i) / columns--);
                out.push(that.slice(i, i += size));
            }
        } else {
            columns--;
            size = Math.floor(len / columns);
            if (len % size === 0)
                size--;
            while (i < size * columns) {
                out.push(that.slice(i, i += size));
            }
            out.push(that.slice(size * columns));

        }

        return out;
    }
});
