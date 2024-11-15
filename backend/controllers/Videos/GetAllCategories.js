const Categories = async (req, res, next) => {
    try {
        const response = await fetch("https://goresee.com/api/v1/videos/categories", {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from external API');
        }

        const data = await response.json();

        res.status(200).json({
            success: true,
            data: data, 
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = Categories;
