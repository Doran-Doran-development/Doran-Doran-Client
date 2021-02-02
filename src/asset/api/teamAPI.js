import { TEAM } from "../../lib/requestApi";
import { BASE_URL } from "../../config/config.json";
import {
  methodType,
  requestApiWithBodyWithToken,
  requestApiWithoutBodyWithToken,
} from "../../lib/requestUrl";

class Team {
  async showTeam() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        TEAM.showTeam(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async showDetailTeam(team_id) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        TEAM.showDetailTeam(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async createTeam(project, description, teacher) {
    try {
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.POST,
        { project, description, teacher },
        TEAM.createTeam(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error();
    }
  }
  async deleteTeam(team_id) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.DELETE,
        TEAM.deleteTeam(team_id),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async addMember(team_id, email) {
    try {
      const response = requestApiWithBodyWithToken(
        BASE_URL,
        methodType.POST,
        { team_id, email },
        TEAM.addMember(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delMember(link_id) {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.DELETE,
        TEAM.delMember(link_id),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async userTeamInfo() {
    try {
      const response = null;
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Team();
