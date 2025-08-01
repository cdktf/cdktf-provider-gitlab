# `integrationCustomIssueTracker` Submodule <a name="`integrationCustomIssueTracker` Submodule" id="@cdktf/provider-gitlab.integrationCustomIssueTracker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationCustomIssueTracker <a name="IntegrationCustomIssueTracker" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_custom_issue_tracker gitlab_integration_custom_issue_tracker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_custom_issue_tracker.IntegrationCustomIssueTracker;

IntegrationCustomIssueTracker.Builder.create(Construct scope, java.lang.String id)
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
    .issuesUrl(java.lang.String)
    .project(java.lang.String)
    .projectUrl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.issuesUrl">issuesUrl</a></code> | <code>java.lang.String</code> | The URL to view an issue in the external issue tracker. Must contain :id. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project for the custom issue tracker. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.projectUrl">projectUrl</a></code> | <code>java.lang.String</code> | The URL to the project in the external issue tracker. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issuesUrl`<sup>Required</sup> <a name="issuesUrl" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.issuesUrl"></a>

- *Type:* java.lang.String

The URL to view an issue in the external issue tracker. Must contain :id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_custom_issue_tracker#issues_url IntegrationCustomIssueTracker#issues_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID or full path of the project for the custom issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_custom_issue_tracker#project IntegrationCustomIssueTracker#project}

---

##### `projectUrl`<sup>Required</sup> <a name="projectUrl" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.Initializer.parameter.projectUrl"></a>

- *Type:* java.lang.String

The URL to the project in the external issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_custom_issue_tracker#project_url IntegrationCustomIssueTracker#project_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationCustomIssueTracker resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_custom_issue_tracker.IntegrationCustomIssueTracker;

IntegrationCustomIssueTracker.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_custom_issue_tracker.IntegrationCustomIssueTracker;

IntegrationCustomIssueTracker.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_custom_issue_tracker.IntegrationCustomIssueTracker;

IntegrationCustomIssueTracker.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_custom_issue_tracker.IntegrationCustomIssueTracker;

IntegrationCustomIssueTracker.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationCustomIssueTracker.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationCustomIssueTracker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationCustomIssueTracker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationCustomIssueTracker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_custom_issue_tracker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationCustomIssueTracker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.slug">slug</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.issuesUrlInput">issuesUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.projectUrlInput">projectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.issuesUrl">issuesUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.projectUrl">projectUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.slug"></a>

```java
public java.lang.String getSlug();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `issuesUrlInput`<sup>Optional</sup> <a name="issuesUrlInput" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.issuesUrlInput"></a>

```java
public java.lang.String getIssuesUrlInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `projectUrlInput`<sup>Optional</sup> <a name="projectUrlInput" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.projectUrlInput"></a>

```java
public java.lang.String getProjectUrlInput();
```

- *Type:* java.lang.String

---

##### `issuesUrl`<sup>Required</sup> <a name="issuesUrl" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.issuesUrl"></a>

```java
public java.lang.String getIssuesUrl();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `projectUrl`<sup>Required</sup> <a name="projectUrl" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.projectUrl"></a>

```java
public java.lang.String getProjectUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTracker.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationCustomIssueTrackerConfig <a name="IntegrationCustomIssueTrackerConfig" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.integration_custom_issue_tracker.IntegrationCustomIssueTrackerConfig;

IntegrationCustomIssueTrackerConfig.builder()
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
    .issuesUrl(java.lang.String)
    .project(java.lang.String)
    .projectUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.issuesUrl">issuesUrl</a></code> | <code>java.lang.String</code> | The URL to view an issue in the external issue tracker. Must contain :id. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID or full path of the project for the custom issue tracker. |
| <code><a href="#@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.projectUrl">projectUrl</a></code> | <code>java.lang.String</code> | The URL to the project in the external issue tracker. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issuesUrl`<sup>Required</sup> <a name="issuesUrl" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.issuesUrl"></a>

```java
public java.lang.String getIssuesUrl();
```

- *Type:* java.lang.String

The URL to view an issue in the external issue tracker. Must contain :id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_custom_issue_tracker#issues_url IntegrationCustomIssueTracker#issues_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID or full path of the project for the custom issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_custom_issue_tracker#project IntegrationCustomIssueTracker#project}

---

##### `projectUrl`<sup>Required</sup> <a name="projectUrl" id="@cdktf/provider-gitlab.integrationCustomIssueTracker.IntegrationCustomIssueTrackerConfig.property.projectUrl"></a>

```java
public java.lang.String getProjectUrl();
```

- *Type:* java.lang.String

The URL to the project in the external issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/integration_custom_issue_tracker#project_url IntegrationCustomIssueTracker#project_url}

---



