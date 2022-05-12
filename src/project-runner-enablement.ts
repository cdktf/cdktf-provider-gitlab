// https://www.terraform.io/docs/providers/gitlab/r/project_runner_enablement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectRunnerEnablementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID or URL-encoded path of the project owned by the authenticated user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_runner_enablement#project ProjectRunnerEnablement#project}
  */
  readonly project: string;
  /**
  * The ID of a runner to enable for the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_runner_enablement#runner_id ProjectRunnerEnablement#runner_id}
  */
  readonly runnerId: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_runner_enablement gitlab_project_runner_enablement}
*/
export class ProjectRunnerEnablement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_runner_enablement";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/project_runner_enablement gitlab_project_runner_enablement} Resource
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
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._runnerId = config.runnerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      project: cdktf.stringToTerraform(this._project),
      runner_id: cdktf.numberToTerraform(this._runnerId),
    };
  }
}
