import { type NextApiRequest, type NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { type GithubRepositoriesResponse } from "types/github";

const repos = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session?.accessToken) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  const accessToken = session.accessToken;
  const { page = 1, per_page = 10 } = req.query;

  const response = await fetch(
    `https://api.github.com/user/repos?page=${page as number}&per_page=${per_page as number}`,
    {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    res
      .status(response.status)
      .json({ message: "Failed to fetch repositories" });
    return;
  }

  const r = (await response.json()) as GithubRepositoriesResponse;
  res.status(200).json(r);
};

export default repos;
