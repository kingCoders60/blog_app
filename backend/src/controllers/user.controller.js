import User from "../models//user.model.js"

export const syncClerkUser = async(req,res)=>{
    try {
        const {userId}=req.auth;
        let user = await User.findOne({clerkId:userId});
        if(user){
            return res.status(200).json(user)
        }

        const {firstName,lastName,emailAddresses,imageUrl}=req.auth.SessionClaims;
        user = await User.create({
          clerkId: userId,
          name: `${firstName} ${lastName}`,
          email: emailAddresses[0]?.emailAddress,
          imageUrl,
        });

        return res.status(200).json(user);   

    } catch (error) {
        return res.status(500).json(error);
    }
}