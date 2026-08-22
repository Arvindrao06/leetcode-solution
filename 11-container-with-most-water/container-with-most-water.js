var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate width between the two lines
        let width = right - left;

        // Water height is determined by the shorter line
        let waterHeight = Math.min(height[left], height[right]);

        // Calculate area
        let area = width * waterHeight;

        // Update maximum area
        maxWater = Math.max(maxWater, area);

        // Move the pointer with the smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};