export const mungeArgs = (user, bio, avatar, dob) => {
  const bucketUrl =
    'https://quwukbuqxqtapoxrimqd.supabase.in/storage/v1/object/public/avatars';
  let newBio;
  let newDob;
  let newAvatar;

  if (!bio) {
    newBio = user.bio;
  } else {
    newBio = bio;
  }

  if (!dob) {
    newDob = user.dob;
  } else {
    newDob = dob;
  }

  if (avatar) {
    newAvatar = `${bucketUrl}/${user.id}/${avatar.name}`;
  } else {
    newAvatar = user.avatar;
  }

  return { newBio, newDob, newAvatar };
};
