const getButter = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const gotButter = true; 
      if (gotButter) {
        resolve("Got butter");
      } else {
        reject(new Error("Could not get butter"));
      }
    }, 2000);
  });
};

const getColdDrinks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const gotButter = true; 
      if (gotButter) {
        resolve("Got cold drinks");
      } else {
        reject(new Error("Could not get cold drinks"));
      }
    }, 2000);
  });
};

const husbandGotButter = getButter();
const husbandGotColdDrinks = husbandGotButter.then(() => {
  return getColdDrinks();
});

husbandGotColdDrinks
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

async function husbandGetsColdDrinks() {
  try {
    await getButter();
    const message = await getColdDrinks();
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

husbandGetsColdDrinks();

async function createPost(post) {
  try {
    const response = await fetch("https://api.example.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

async function deletePost(postId) {
  try {
    const response = await fetch(`https://dummy.restapiexample.com/api/v1/create}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    } else {
      throw new Error("Failed to delete post");
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
}
