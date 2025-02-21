/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_compliance_framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectComplianceFrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Globally unique ID of the compliance framework to assign to the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_compliance_framework#compliance_framework_id ProjectComplianceFramework#compliance_framework_id}
  */
  readonly complianceFrameworkId: string;
  /**
  * The ID or full path of the project to change the compliance framework of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_compliance_framework#project ProjectComplianceFramework#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_compliance_framework gitlab_project_compliance_framework}
*/
export class ProjectComplianceFramework extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_compliance_framework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectComplianceFramework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectComplianceFramework to import
  * @param importFromId The id of the existing ProjectComplianceFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_compliance_framework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectComplianceFramework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_compliance_framework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/project_compliance_framework gitlab_project_compliance_framework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectComplianceFrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectComplianceFrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_compliance_framework',
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
    this._complianceFrameworkId = config.complianceFrameworkId;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliance_framework_id - computed: false, optional: false, required: true
  private _complianceFrameworkId?: string; 
  public get complianceFrameworkId() {
    return this.getStringAttribute('compliance_framework_id');
  }
  public set complianceFrameworkId(value: string) {
    this._complianceFrameworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceFrameworkIdInput() {
    return this._complianceFrameworkId;
  }

  // id - computed: true, optional: false, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliance_framework_id: cdktf.stringToTerraform(this._complianceFrameworkId),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_framework_id: {
        value: cdktf.stringToHclTerraform(this._complianceFrameworkId),
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
