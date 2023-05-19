const Post = require("../models/post");
const Category = require("../models/category");
const mongoose = require("mongoose");

const createPost = async (req, res) => {
    try {
        const { title, miniature, content, category, path } = req.body;
        if (!category) {
            return res.status(400).send({
                message: "La categoria es obligatoria",
            });
        }
        const existingCategory = await Category.findOne({ _id: category });
        if (!existingCategory) {
            return res.status(404).send({
                message: "La categoria especificada no existe",
            });
        }
        const post = new Post({
            title,
            miniature,
            content,
            category,
            path,
        });
        const postStored = await post.save();
        if (!postStored) {
            return res.status(404).send({
                message: "No se ha podido guardar el post",
            });
        }
        res.status(200).send({
            post: postStored,
        });
    } catch (err) {
        res.status(500).send({
            message: "Error en el servidor",
        });
    }
};

const getPosts = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.body;
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);
        if (isNaN(pageNumber) || isNaN(limitNumber)) {
            return res.status(400).send({
                message: "Los parametros de paginación deben ser números validos",
            });
        }
        const options = {
            page: pageNumber,
            limit: limitNumber,
            sort: { date: "desc" },
        };
        const posts = await Post.paginate({}, options);
        if (!posts || posts.totalPages === 0) {
            return res.status(404).send({
                message: "No se han encontrado post",
            });
        }
        res.status(200).send({
            posts,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error en el servidor al obtener los datos",
        });
    }
};

const getPost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({
                message: "El id del post es obligatorio",
            });
        }
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).send({
                message: "No se han encontrado post",
            });
        }

        res.status(200).send({
            post,
        })
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: "Error en el servidor",
        });
    }
};

const getPostsByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        if (!mongoose.Types.ObjectId.isValid(category)) {
            return res.status(400).send({
                message: "El ID de categoria no es valido",
            });
        }

        const posts = await Post.find({ category });
        if (!posts || posts.length === 0) {
            return res.status(404).send({
                message: "No se han encontrado posts para esta categoria",
            });
        }
        res.status(200).send({
            posts,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error en el servidor al obtener los post",
        });
    }
};

const getPostsBySearch = async (req, res) => {
    try {
        const { search } = req.params;

        if (!search) {
            return res.status(400).send({
                message: "El término de búsqueda es obligatorio",
            });
        }
        
        const posts = await Post.find({
            $or: [
                { title: { $regex: search, $options: "i" } },
                { content: { $regex: search, $options: "i" } },
            ],
        });

        if (posts.length === 0) {
            return res.status(404).send({
                message: "No se han encontrado posts para el termino de busqueda especificado",
            });
        }

        res.status(200).send({
            posts,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error en el servidor al obtener post por el termino de busqueda",
        });
    }
};

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(404).send({
                message: "El id del post es obligatorio",
            });
        }

        const updates = req.body;

        const post = await Post.findByIdAndUpdate(id, updates, { new: true });

        if (!post) {
            return res.status(404).send({
                message: "No se ha encontrado ningun post",
            });
        }
        res.status(200).send({
            post,
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Erroe en el servidor al actualizar el post",
        });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                message: "El id del post es obligatorio",
            });
        }

        const deletePost = await Post.findByIdAndDelete(id);

        if (!deletePost) {
            return res.status(404).send({
                message: "No se ha encontrado ningun post",
            });
        }
        res.status(200).send({
            message: "El post ha sido eliminado exitosamente",
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error en el servidor al eliminar el post",
        });
    }
}; 

module.exports = {
    createPost,
    getPosts,
    getPost,
    getPostsByCategory,
    getPostsBySearch,
    updatePost,
    deletePost,
};