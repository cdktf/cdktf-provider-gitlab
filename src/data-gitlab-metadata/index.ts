// https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabMetadataConfig extends cdktf.TerraformMetaArguments {
}
export interface DataGitlabMetadataKas {
}

export function dataGitlabMetadataKasToTerraform(struct?: DataGitlabMetadataKas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabMetadataKasToHclTerraform(struct?: DataGitlabMetadataKas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabMetadataKasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabMetadataKas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabMetadataKas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_url - computed: true, optional: false, required: false
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/metadata gitlab_metadata}
*/
export class DataGitlabMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabMetadata to import
  * @param importFromId The id of the existing DataGitlabMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/data-sources/metadata gitlab_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabMetadataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabMetadataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab_metadata',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.11.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enterprise - computed: true, optional: false, required: false
  public get enterprise() {
    return this.getBooleanAttribute('enterprise');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kas - computed: true, optional: false, required: false
  private _kas = new DataGitlabMetadataKasOutputReference(this, "kas");
  public get kas() {
    return this._kas;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
