// https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scopes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectJobTokenScopesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scopes#project_id ProjectJobTokenScopes#project_id}
  */
  readonly projectId: number;
  /**
  * A set of project IDs that are in the CI/CD job token inbound allowlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scopes#target_project_ids ProjectJobTokenScopes#target_project_ids}
  */
  readonly targetProjectIds: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scopes gitlab_project_job_token_scopes}
*/
export class ProjectJobTokenScopes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_job_token_scopes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectJobTokenScopes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectJobTokenScopes to import
  * @param importFromId The id of the existing ProjectJobTokenScopes that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scopes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectJobTokenScopes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_job_token_scopes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/resources/project_job_token_scopes gitlab_project_job_token_scopes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectJobTokenScopesConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectJobTokenScopesConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_job_token_scopes',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.1.0',
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
    this._projectId = config.projectId;
    this._targetProjectIds = config.targetProjectIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // target_project_ids - computed: false, optional: false, required: true
  private _targetProjectIds?: number[]; 
  public get targetProjectIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('target_project_ids')));
  }
  public set targetProjectIds(value: number[]) {
    this._targetProjectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectIdsInput() {
    return this._targetProjectIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.numberToTerraform(this._projectId),
      target_project_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._targetProjectIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_project_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._targetProjectIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
