import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "./index";
import appwriteService from "../../appwrite/mainConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.userdata);

  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

    const submit = async (data) => {
        if (post) {
            const file = data.images[0] ? appwriteService.uploadFile(data.image[0]) : null

            if (file) {
                appwriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            })

            if (dbPost) navigate(`/post/${dbPost.$id}`)
        } else {
            const file = await appwriteService.uploadFile(data.image[0])

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost(
                    ...data,
                    userId = userdata.id
                )

                if (dbPost) navigate(`/post/${dbPost.$id}`)
                
            }
        }
    }

  return <div>PostForm</div>;
}

export default PostForm;
