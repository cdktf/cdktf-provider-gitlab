# `complianceFramework` Submodule <a name="`complianceFramework` Submodule" id="@cdktf/provider-gitlab.complianceFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceFramework <a name="ComplianceFramework" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework gitlab_compliance_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.compliance_framework.ComplianceFramework;

ComplianceFramework.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .color(java.lang.String)
    .description(java.lang.String)
    .name(java.lang.String)
    .namespacePath(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
//  .pipelineConfigurationFullPath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.color">color</a></code> | <code>java.lang.String</code> | New color representation of the compliance framework in hex format. e.g. #FCA121. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description for the compliance framework. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name for the compliance framework. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | Full path of the namespace to add the compliance framework to. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this compliance framework as the default framework for the group. Default: `false`. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.pipelineConfigurationFullPath">pipelineConfigurationFullPath</a></code> | <code>java.lang.String</code> | Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Required format: `path/file.y[a]ml@group-name/project-name` **Note**: Ultimate license required. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.color"></a>

- *Type:* java.lang.String

New color representation of the compliance framework in hex format. e.g. #FCA121.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#color ComplianceFramework#color}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description for the compliance framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#description ComplianceFramework#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name for the compliance framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#name ComplianceFramework#name}

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.namespacePath"></a>

- *Type:* java.lang.String

Full path of the namespace to add the compliance framework to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#namespace_path ComplianceFramework#namespace_path}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.default"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this compliance framework as the default framework for the group. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#default ComplianceFramework#default}

---

##### `pipelineConfigurationFullPath`<sup>Optional</sup> <a name="pipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.pipelineConfigurationFullPath"></a>

- *Type:* java.lang.String

Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Required format: `path/file.y[a]ml@group-name/project-name` **Note**: Ultimate license required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#pipeline_configuration_full_path ComplianceFramework#pipeline_configuration_full_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetPipelineConfigurationFullPath">resetPipelineConfigurationFullPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetPipelineConfigurationFullPath` <a name="resetPipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetPipelineConfigurationFullPath"></a>

```java
public void resetPipelineConfigurationFullPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceFramework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.compliance_framework.ComplianceFramework;

ComplianceFramework.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.compliance_framework.ComplianceFramework;

ComplianceFramework.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.compliance_framework.ComplianceFramework;

ComplianceFramework.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.compliance_framework.ComplianceFramework;

ComplianceFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComplianceFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComplianceFramework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComplianceFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComplianceFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.frameworkId">frameworkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.colorInput">colorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.defaultInput">defaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePathInput">namespacePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPathInput">pipelineConfigurationFullPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.color">color</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPath">pipelineConfigurationFullPath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.frameworkId"></a>

```java
public java.lang.String getFrameworkId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `colorInput`<sup>Optional</sup> <a name="colorInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.colorInput"></a>

```java
public java.lang.String getColorInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.defaultInput"></a>

```java
public java.lang.Object getDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespacePathInput`<sup>Optional</sup> <a name="namespacePathInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePathInput"></a>

```java
public java.lang.String getNamespacePathInput();
```

- *Type:* java.lang.String

---

##### `pipelineConfigurationFullPathInput`<sup>Optional</sup> <a name="pipelineConfigurationFullPathInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPathInput"></a>

```java
public java.lang.String getPipelineConfigurationFullPathInput();
```

- *Type:* java.lang.String

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.color"></a>

```java
public java.lang.String getColor();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePath"></a>

```java
public java.lang.String getNamespacePath();
```

- *Type:* java.lang.String

---

##### `pipelineConfigurationFullPath`<sup>Required</sup> <a name="pipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPath"></a>

```java
public java.lang.String getPipelineConfigurationFullPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceFrameworkConfig <a name="ComplianceFrameworkConfig" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.compliance_framework.ComplianceFrameworkConfig;

ComplianceFrameworkConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .color(java.lang.String)
    .description(java.lang.String)
    .name(java.lang.String)
    .namespacePath(java.lang.String)
//  .default(java.lang.Boolean)
//  .default(IResolvable)
//  .pipelineConfigurationFullPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.color">color</a></code> | <code>java.lang.String</code> | New color representation of the compliance framework in hex format. e.g. #FCA121. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description for the compliance framework. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name for the compliance framework. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | Full path of the namespace to add the compliance framework to. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.default">default</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set this compliance framework as the default framework for the group. Default: `false`. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.pipelineConfigurationFullPath">pipelineConfigurationFullPath</a></code> | <code>java.lang.String</code> | Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Required format: `path/file.y[a]ml@group-name/project-name` **Note**: Ultimate license required. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.color"></a>

```java
public java.lang.String getColor();
```

- *Type:* java.lang.String

New color representation of the compliance framework in hex format. e.g. #FCA121.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#color ComplianceFramework#color}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for the compliance framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#description ComplianceFramework#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name for the compliance framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#name ComplianceFramework#name}

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.namespacePath"></a>

```java
public java.lang.String getNamespacePath();
```

- *Type:* java.lang.String

Full path of the namespace to add the compliance framework to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#namespace_path ComplianceFramework#namespace_path}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.default"></a>

```java
public java.lang.Object getDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set this compliance framework as the default framework for the group. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#default ComplianceFramework#default}

---

##### `pipelineConfigurationFullPath`<sup>Optional</sup> <a name="pipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.pipelineConfigurationFullPath"></a>

```java
public java.lang.String getPipelineConfigurationFullPath();
```

- *Type:* java.lang.String

Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Required format: `path/file.y[a]ml@group-name/project-name` **Note**: Ultimate license required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.1/docs/resources/compliance_framework#pipeline_configuration_full_path ComplianceFramework#pipeline_configuration_full_path}

---



