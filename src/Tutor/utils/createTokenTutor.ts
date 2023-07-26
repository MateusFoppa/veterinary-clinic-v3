const createTokenTutor = (tutor) => {
  const email = tutor.email as string;
  const tutorId = tutor._id as string;
  return { email, tutorId };
};

export = createTokenTutor;
