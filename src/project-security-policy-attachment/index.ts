// https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_security_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectSecurityPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or Full Path of the security policy project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_security_policy_attachment#policy_project ProjectSecurityPolicyAttachment#policy_project}
  */
  readonly policyProject: string;
  /**
  * The ID or Full Path of the project which will have the security policy project assigned to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_security_policy_attachment#project ProjectSecurityPolicyAttachment#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_security_policy_attachment gitlab_project_security_policy_attachment}
*/
export class ProjectSecurityPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_security_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectSecurityPolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectSecurityPolicyAttachment to import
  * @param importFromId The id of the existing ProjectSecurityPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_security_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectSecurityPolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_security_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_security_policy_attachment gitlab_project_security_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectSecurityPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectSecurityPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_security_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.9.0',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._policyProject = config.policyProject;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_project - computed: false, optional: false, required: true
  private _policyProject?: string; 
  public get policyProject() {
    return this.getStringAttribute('policy_project');
  }
  public set policyProject(value: string) {
    this._policyProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyProjectInput() {
    return this._policyProject;
  }

  // policy_project_graphql_id - computed: true, optional: false, required: false
  public get policyProjectGraphqlId() {
    return this.getStringAttribute('policy_project_graphql_id');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_graphql_id - computed: true, optional: false, required: false
  public get projectGraphqlId() {
    return this.getStringAttribute('project_graphql_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_project: cdktf.stringToTerraform(this._policyProject),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_project: {
        value: cdktf.stringToHclTerraform(this._policyProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
