// https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_runner_enablement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectRunnerEnablementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_runner_enablement#id ProjectRunnerEnablement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID or URL-encoded path of the project owned by the authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_runner_enablement#project ProjectRunnerEnablement#project}
  */
  readonly project: string;
  /**
  * The ID of a runner to enable for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_runner_enablement#runner_id ProjectRunnerEnablement#runner_id}
  */
  readonly runnerId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_runner_enablement gitlab_project_runner_enablement}
*/
export class ProjectRunnerEnablement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_runner_enablement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectRunnerEnablement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectRunnerEnablement to import
  * @param importFromId The id of the existing ProjectRunnerEnablement that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_runner_enablement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectRunnerEnablement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_runner_enablement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/project_runner_enablement gitlab_project_runner_enablement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectRunnerEnablementConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectRunnerEnablementConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_runner_enablement',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.10.0',
        providerVersionConstraint: '~> 16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._project = config.project;
    this._runnerId = config.runnerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // runner_id - computed: false, optional: false, required: true
  private _runnerId?: number; 
  public get runnerId() {
    return this.getNumberAttribute('runner_id');
  }
  public set runnerId(value: number) {
    this._runnerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerIdInput() {
    return this._runnerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      runner_id: cdktf.numberToTerraform(this._runnerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      runner_id: {
        value: cdktf.numberToHclTerraform(this._runnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
