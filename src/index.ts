import { Probot } from "probot";

export = (app: Probot) => {
  // const isFriday = new Date().getDay() === 5;

  // if (isFriday) {
    app.on(["pull_request.opened"], async (context) => {    
      const comment = context.issue({
        body: "Lembre-se que hoje é sexta-feira e sexta-feira não é dia de deploy!",
      });

      await context.octokit.issues.createComment(comment);
    });
  // }
};
